/**
 * @NapiVersion 2.0
 * @NScriptType ScheduledScript
 */

define (["N/record","N/https","N/log" ] , function(record,https,log){

    var baseurl =  "https://api.hubapi.com"

    function retriveContactsfromhubspot(){

        var contactsApi = "/crm/v3/objects/contacts"
        var queryparams = "?properties=firstname&properties=lastname"
        var ApiUrl = baseurl + contactsApi + queryparams
        var accesstoken = "xyz"
        var header = {
            "Accept": "*/*",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accesstoken
        }
        
        try {
            log.debug(ApiUrl)
            var response = https.get({
                url: ApiUrl,
                headers: header
            })
            log.debug(response)

            if (response.code === 200){
                var responsebody = response.body
                log.debug("response body: " , responsebody)
                var jsonResponse = JSON.parse(responsebody)

                log.debug("JSON response : " , jsonResponse)
                var contacts = jsonResponse.results

                for (var i=0; i < contacts.length ; i++){
                    var contact = contacts[i]
                    log.debug({
                    title: "HubSpot Contact: ",
                    details: contact
                    })
                }
            } else {
                log.error({
                    title: "Error in retriveContactsfromhubspot Response: ",
                    details: "HTTP Error code - " + response.code + ", Body: " + response.body
                })
            }
        }
        catch(error){
            log.error({
                title: "Error in retriveContactsfromhubspot Function: ",
                details: error.message
            })
        }
    }
    
    // function retriveCompaniesfromhubspot(){

    // }

    function execute(context){
         retriveContactsfromhubspot()
    }
    return {
        execute : execute
    }
})

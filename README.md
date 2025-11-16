# 🔗 NetSuite × HubSpot Contacts Retrieval  
### Scheduled Script Integration (SuiteScript 2.x)  
**© 2025 Shahmeer Khan**

---

![Banner](https://dummyimage.com/1100x220/0f0f0f/ffffff&text=NetSuite+HubSpot+Contacts+Integration)

<div align="center">

✨ **SuiteScript 2.x** • 🔄 **API Sync** • ☁️ **HubSpot CRM** • ⏱️ **Scheduled Automation**

</div>

---

## 🚀 What This Project Does

This repository contains a **NetSuite Scheduled Script** written in **SuiteScript 2.0** that retrieves contacts from **HubSpot CRM** using their `/crm/v3/objects/contacts` API.

It demonstrates:

✔ How to call external REST APIs from NetSuite  
✔ How to authenticate using **Bearer token**  
✔ How to parse and log HubSpot contacts  
✔ How to structure a clean, production-ready scheduled script  
✔ Error handling, debugging, and response validation  

---

# 🔥 Key Features

### 🌐 1. HubSpot CRM API Integration  
Pulls contact data using the HubSpot v3 API, including:

- First Name  
- Last Name  
- Contact ID  
- Full JSON response logging  
- Dynamic looping through results  

### 🛠️ 2. SuiteScript 2.0 Scheduled Script  
- Uses `N/https` for API calls  
- Debug logging via `N/log`  
- Proper structured functions  
- Modular and easy to extend  

### 🔐 3. Secure OAuth Bearer Token Authentication  
Adds authorization headers:

```js
"Authorization": "Bearer " + accesstoken







MIT License  
Copyright (c) 2025 Shahmeer Khan

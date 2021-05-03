CONTENTS OF THIS FILE
---------------------

 * Introduction
 * Requirements
 * Recommended modules
 * Installation
 * Configuration
 * Troubleshooting
 * FAQ
 * Maintainers

CONFIGURATION
-------------
 
 * Configure the user permissions in Administration » People » Permissions:

   - Use the administration pages and help (System module)

     The top-level administration categories require this permission to be
     accessible. The administration menu will be empty unless this permission
     is granted.

   - Access administration menu

     Users with this permission will see the administration menu at the top of
     each page.

   - Display links

     Users with this permission will receive links to drupal.org issue queues
     for all enabled contributed modules. The issue queue links appear under
     the administration menu icon.

 * Customize the menu settings in Administration » Configuration and modules »
   Administration » Administration menu.

 * To prevent administrative menu items from appearing twice, you may hide the
   "Management" menu block.

   TROUBLESHOOTING
---------------

 * If the menu does not display, check the following:

   - Are the "Access administration menu" and "Use the administration pages
     and help" permissions enabled for the appropriate roles?

   - Does html of your theme output the $page_bottom variable?

FAQ
---

Q: I enabled "Aggregate and compress CSS files", but admin_menu.css is still
   there. Is this normal?

A: Yes, this is the intended behavior. the administration menu module only loads
   its stylesheet as needed (i.e., on page requests by logged-on, administrative
   users).

   MAINTAINERS
-----------

Current maintainers:
 * Dev Shirquille Sande
 

This project has been sponsored by:
* SELF
## Known Bugs

## Technologies Used
HTML and CSS and some JAVAscript
## Support and contact details
shirquille.sande@student.moringaschool.com

##My gh-pages link
https://github.com/ShirQUillE-SandE/Dairy_Business/deployments/activity_log?environment=github-pages
### License
*Licensed under the [MIT LICENSE](LICENSE.txt)*
Copyright (c) 2021 **Shirquille Sande**
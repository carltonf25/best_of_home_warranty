#Disable serversignature
ServerSignature off

#Redirect www to http
RewriteEngine on
RewriteCond %{HTTP_HOST} ^107\.180\.25\.127 [OR]
RewriteCond %{HTTP_HOST} ^www\.bestofhomewarranty\.com$
RewriteRule ^/?$ "http\:\/\/bestofhomewarranty\.com\/" [R=301,L]

# compress text, html, javascript, css, xml:
AddOutputFilterByType DEFLATE text/plain
AddOutputFilterByType DEFLATE text/html
AddOutputFilterByType DEFLATE text/xml
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE application/xml
AddOutputFilterByType DEFLATE application/xhtml+xml
AddOutputFilterByType DEFLATE application/rss+xml
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE application/x-javascript

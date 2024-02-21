server {
       listen 80 default_server;
       listen [::]:80 default_server;

       server_name _;

       return 301 https://packult.com$request_uri;

}

server {

       server_name www.packult.com;

       return 301 https://packult.com$request_uri;


    listen [::]:443 ssl; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/packult.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/packult.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

# domain
server {

       server_name packult.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }       

       access_log /var/log/nginx/packult.com.access.log;
       error_log /var/log/nginx/packult.com.error.log;  

    listen [::]:443 ssl ipv6only=on; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/packult.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/packult.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

server {
    if ($host = packult.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


       listen 80;
       listen [::]:80;

       server_name packult.com;
    return 404; # managed by Certbot


}

server {
    if ($host = www.packult.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


       listen 80;
       listen [::]:80;

       server_name www.packult.com;
    return 404; # managed by Certbot


}
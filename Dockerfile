FROM nginx:latest

EXPOSE 80

COPY nginx/conf.d/default.conf /etc/nginx/conf.d/

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]
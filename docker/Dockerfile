FROM docker.io/node:8
COPY cnpmjs.org-2.19.4.tar.gz /opt/
RUN cd /opt/ && tar -zxvf cnpmjs.org-2.19.4.tar.gz && rm -rf cnpmjs.org-2.19.4.tar.gz
COPY config.js /opt/cnpmjs.org-2.19.4/config/
WORKDIR /opt/cnpmjs.org-2.19.4/
RUN  npm install  
EXPOSE 7001 
EXPOSE 7002
ENTRYPOINT   npm run start  &&  tail -f /dev/null
FROM docker.io/node:8
RUN cd /opt && wget https://codeload.github.com/cnpm/cnpmjs.org/tar.gz/2.19.4 . && tar -zxvf 2.19.4  && rm -rf 2.19.4
COPY config.js /opt/cnpmjs.org-2.19.4/config/
WORKDIR /opt/cnpmjs.org-2.19.4/
RUN  npm install  
EXPOSE 7001 
EXPOSE 7002
ENTRYPOINT   npm run start  &&  tail -f /dev/null
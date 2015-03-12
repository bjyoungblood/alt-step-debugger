DEVSERVER = node_modules/webpack-dev-server/bin/webpack-dev-server.js

export NODE_ENV = test

.PHONY: dev

dev:
	NODE_ENV=development $(DEVSERVER) --content-base dist/ --hot --devtool eval --progress --colors --debug --output-pathinfo


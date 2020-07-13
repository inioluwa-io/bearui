.PHONY: build help

# install: package.json ## install dependencies
# 	@yarn
	
build-rap-core:
	@echo "Transpiling rap-core files...";
	@cd ./packages/rap-core && yarn run -s build
	
build-rap-ui:
	@echo "Transpiling rap-ui files...";
	@cd ./packages/rap-ui && yarn run -s build
	
build-react-admin-panel:
	@echo "Transpiling react-admin-panel files...";
	@cd ./packages/react-admin-panel && yarn run -s build
	
run-demo: ## run the demo example
	@yarn run run-demo	
	
run-demo-watch: ## run the demo example in watch mode
	@yarn run run-demo-watch
	
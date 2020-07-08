.PHONY: build help

install: package.json ## install dependencies
	@yarn
	
run-demo: ## run the demo example
	@yarn run run-demo
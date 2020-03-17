install:
	npm install

start:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

logs:
	git log --oneline --decorate --graph --all

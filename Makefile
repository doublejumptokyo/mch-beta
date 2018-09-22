
PKG=github.com/doublejumptokyo/mch-beta
NAME=mch-beta
APP_NAME=mch-beta

BUCKET = build.prod.mch.djty.co

CURRENT_VERSION = $(shell git describe --tags 2> /dev/null || git rev-parse --abbrev-ref HEAD)
CURRENT_REVISION = $(shell git rev-parse HEAD)
CURRENT_REVISION_SHORT = $(shell git rev-parse HEAD)

export NODE_ENV=production

.PHONY: setup build upload deploy

build:
	npm run build

pack: build
	rsync -l . deploy/dist \
	--recursive \
	--exclude=".git" \
	--exclude=".direnv" \
	--exclude=".envrc" \
	--exclude="deploy" \
	--delete


upload: pack
	echo $(CURRENT_REVISION) | aws s3 cp - s3://$(BUCKET)/$(PKG)/tree/$(CURRENT_VERSION)/current
	cd deploy && \
	tar zcf - dist | aws s3 cp - s3://$(BUCKET)/$(PKG)/commit/$(CURRENT_REVISION)/dist.tgz

setup:
	npm install

deploy:
	cd deploy && \
	./deploy.yml -e VERSION=$(CURRENT_VERSION) -e ENV=$(ENV) -e app_name=$(APP_NAME) -i $(ENV)

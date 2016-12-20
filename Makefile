ext=zip
bin=$(shell which zip)
name=remove-x
of=$(name).$(ext)
dir=src

all: release

release:
ifeq ($(bin),"")
		@echo zip is not installed. aborting
else
		$(MAKE) clean
		@echo packing to $(ext)
		cd $(dir) && $(bin) -r ../$(of) *
endif

clean: clear

clear:
	rm -rfv *.zip

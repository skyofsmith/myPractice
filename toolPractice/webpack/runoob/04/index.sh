#!/bin/bash

webpack runoob.js bundle.js --module-bind 'css=style-loader!css-loader'


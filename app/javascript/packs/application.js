import 'core-js/stable'
import 'regenerator-runtime/runtime'

require.context('../images', true);
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("../stylesheets/style.scss")
require("../stylesheets/base_styles.scss")
require("../stylesheets/tailwind.css")
require("../stylesheets/components/dashboard.module.scss")

require.context("../stylesheets/components", true);

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
// Support component names relative to this directory:
var componentRequireContext = require.context("../components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);

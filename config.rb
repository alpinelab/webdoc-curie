###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
with_layout :landing do
  page "/pages/landing/*"
end

with_layout :fullscreen do
  page "/pages/mastectomy"
end


# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

page '/sitemap.xml', :layout => false, :format => :xhtml

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# i18n extension
activate :i18n, :mount_at_root => :fr

# Automatic image dimensions on image_tag helper
activate :automatic_image_sizes

# Directory Indexes
activate :directory_indexes

activate :autoprefixer do |config|
  # config.browsers = ['last 3 versions', 'Explorer >= 9']
  config.cascade  = true
  # config.inline   = true
  # config.ignore   = ['hacks.css']
end

activate :google_analytics do |ga|
  # Property ID (default = nil)
  ga.tracking_id = 'UA-XXXXXXX-X'

  # Tracking across a domain and its subdomains (default = nil)
  ga.domain_name = 'example.com'
end

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Minify HTML
  activate :minify_html

  # Enable cache buster
  activate :asset_hash, ignore: [/images\/tipuesearch\/.*\.png/]

  # Use relative URLs
  activate :relative_assets

  # Produce gzipped versions of HTML, CSS, and JavaScript
  activate :gzip

   # Create a whole bunch of favicons for various devices and OSes
  activate :favicon_maker, icons: {
    'images/logo-500.png' => [
      { icon: 'apple-touch-icon-152x152-precomposed.png' },
      { icon: 'apple-touch-icon-144x144-precomposed.png' },
      { icon: 'apple-touch-icon-120x120-precomposed.png' },
      { icon: 'apple-touch-icon-114x114-precomposed.png' },
      { icon: 'apple-touch-icon-76x76-precomposed.png' },
      { icon: 'apple-touch-icon-72x72-precomposed.png' },
      { icon: 'apple-touch-icon-60x60-precomposed.png' },
      { icon: 'apple-touch-icon-57x57-precomposed.png' },
      { icon: 'apple-touch-icon-precomposed.png', size: '57x57' },
      { icon: 'apple-touch-icon.png', size: '57x57' },
      { icon: 'favicon-196x196.png' },
      { icon: 'favicon-160x160.png' },
      { icon: 'favicon-96x96.png' },
      { icon: 'favicon-32x32.png' },
      { icon: 'favicon-16x16.png' },
      { icon: 'favicon.png', size: '16x16' },
      { icon: 'favicon.ico', size: '64x64,32x32,24x24,16x16' },
      { icon: 'mstile-144x144', format: 'png' }
    ]
  }

  activate :sitemap, :hostname => "http://www.example.com"
end

activate :deploy do |deploy|
  deploy.method = :git
end

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
helpers do
  def parent_page
    source_file      = current_page.source_file
    parent_file      = File.dirname(source_file) + "/index.haml"
    parent_url       = File.dirname(current_page.url)
    upper_parent_url = File.dirname(parent_url)
    File.exist?(parent_file) ? parent_url : upper_parent_url
  end
end

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
  ga.tracking_id = 'UA-56426073-1'

  # Tracking across a domain and its subdomains (default = nil)
  ga.domain_name = 'guerirleregard.fr'
end

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload, host: 'localhost'
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
    '/images/pictograms/main_logo.png' => [
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

  activate :sitemap, :hostname => "http://guerirlereguard.fr"
end

activate :deploy do |deploy|
  deploy.method = :git
end

activate :s3_sync do |s3_sync|
  s3_sync.bucket                     = 'guerirleregard.fr'
  s3_sync.region                     = 'eu-west-1'
  s3_sync.aws_access_key_id          = nil # Override this from env vriable AWS_ACCESS_KEY_ID
  s3_sync.aws_secret_access_key      = nil # Override this from env vriable AWS_SECRET_ACCESS_KEY
  s3_sync.delete                     = false # We delete stray files by default.
  s3_sync.after_build                = false # We do not chain after the build step by default.
  s3_sync.prefer_gzip                = true
  s3_sync.path_style                 = true
  s3_sync.reduced_redundancy_storage = false
  s3_sync.acl                        = 'public-read'
  s3_sync.encryption                 = false
  s3_sync.prefix                     = nil
  s3_sync.version_bucket             = false
end

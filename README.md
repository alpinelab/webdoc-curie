webdoc-curie
============

## Deploy to S3

```shell
$  AWS_ACCESS_KEY_ID=your_key_id AWS_SECRET_ACCESS_KEY=your_secret_key bundle exec middleman s3_sync
```

:warning: prefix this command with a space so it is not saved to your shell history


## Download video thumbnails from vimeo

```shell
$ nodejs scripts/download_vimeo_thumbnails.js
```
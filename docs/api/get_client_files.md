---
sidebar_position: 11
---
# Get client files

You can request [plugNmeet-client](https://github.com/mynaparrot/plugNmeet-client) files (CSS, JS) and embeded those scripts into your web application to load the interface directly. You will not need to use an iframe. Any domain name can be used for this purpose. All you have to do is make sure you're using an SSL-enabled domain. Check out one of our already implemented plugins, such as [Moodle](https://github.com/mynaparrot/moodle-mod_plugnmeet/blob/main/conference.php) or [Wordpress](https://github.com/mynaparrot/plugNmeet-WordPress/blob/main/plugnmeet/public/partials/plugnmeet-public-display-client.php).

End point: `/getClientFiles`

**Example**:

```json
{}
```

## Response


| Field         | Type                  | Position | Description               |
| :-------------- | ----------------------- | ---------- | :-------------------------- |
| status        | boolean               | root     | The status of the request |
| msg           | string                | root     | Response message          |
| css | array | root     |          All required CSS files                 |
| js | array | root     |         All required JS files                  |

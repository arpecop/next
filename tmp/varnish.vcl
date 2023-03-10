vcl 4.0;

backend default {
    .host = "couchdbone";
    .port = "5984";
}

sub vcl_recv {
    set req.backend_hint = default;
}

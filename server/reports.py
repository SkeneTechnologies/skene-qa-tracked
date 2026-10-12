from posthog import Posthog

client = Posthog("phc_server_key", host="https://eu.i.posthog.com")


def export_report(member_id, rows, fmt):
    body = render(rows, fmt)
    client.capture("report_exported", distinct_id=member_id, properties={"format": fmt, "rows": len(rows)})
    return body


def render(rows, fmt):
    return {"format": fmt, "rows": rows}

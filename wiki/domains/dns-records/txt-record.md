---
sidebar_position: 10
sidebar_label: TXT Record
---

# Was macht ein TXT Record und wie erstellt man ihn?

## Was ist ein TXT Record?

Ein TXT Record wird dazu verwendet um Domains einen bestimmten Text wiedergeben zu lassen. Diese Funktion wird oft für Domain Inhaber Verifizierungen oder für die Absicherung des Mailversands verwendet.

## Wie legt man einen TXT Record an?

### Step-by-Step Anleitung:

1. Rufe die Verwaltung deine Domain über den Kundenbereich auf.
2. Wähle in der Sidebar den Menüpunkt "DNS Verwaltung" aus - Sollte dieser Punkt nicht angezeigt werden, kannst du die WaveHosting DNS Verwaltung **kostenfrei** über den Sidebar Menüpuntk "Erweiterungen" aktivieren!
3. Wähle im Dropdown den TXT Record aus.
4. Im Feld "Name" gibst du, wenn gewünscht eine Subdomain ein. Subdomain bedeutet, dass vor deiner Domain ein Präfix steht (bspw. **_dmarc**.wavehosting.net). Ansonsten ein "@" Zeichen als Alias für die Domain selbst eintragen.
5. Im Feld "Target" gibst du den gewünschten Text, den die Domain ausgeben soll, ein.
6. Klicke auf den Button Record erstellen, um deine Eingaben zu speichern.

> #### Bildliche Abbildung der oben gezeigten Anleitung:
![wavehosting dns txt record](../../../static/img/domains/txt-record.png)

-----
> *DNS Updates können ein wenig Zeit in Anspruch nehmen. Meist liegt das Problem am Cache oder an deinen eigenen, lokalen Nameservern. Wir empfehlen diese manuell auf die von Cloudflare oder Google umzustellen, um die schnellsten Updates zu erhalten.*
>
> *[Hier erfährst du, wie du die Cloudflare Nameserver setzt](https://1.1.1.1/dns/)*.
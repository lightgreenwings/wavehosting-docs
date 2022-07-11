---
sidebar_position: 10
sidebar_label: A Record
---

# Was macht ein A Record und wie erstellt man ihn?

## Was ist ein A Record?

Ein A Record wird verwendet um eine Domain, beispielsweise wavehosting.de oder auch wavehosting.net, auf eine IPv4 Adresse "aufzuschalten", damit die Domain die hinterlegte IPv4 auflöst.

Über einen A Record lässt sich zum Beispiel eine Website über die Domain bereitgestellt werden oder die Basis für einen [SRV Record](srv-record.md) geschaffen werden.

## Wie legt man einen A Record an?

### Step-by-Step Anleitung:

1. Rufe die Verwaltung deine Domain über den Kundenbereich auf.
2. Wähle in der Sidebar den Menüpunkt "DNS Verwaltung" aus - Sollte dieser Punkt nicht angezeigt werden, kannst du die WaveHosting DNS Verwaltung **kostenfrei** über den Sidebar Menüpuntk "Erweiterungen" aktivieren!
3. Wähle im Dropdown den A Record aus. (Standardauswahl)
4. Im Feld "Name" gibst du, wenn gewünscht eine Subdomain ein. Subdomain bedeutet, dass vor deiner Domain ein Präfix steht (bspw. **mc**.wavehosting.net). Ansonsten ein "@" Zeichen als Alias für die Domain selbst eintragen.
5. Im Feld "Target" gibst du die IPv4 Adresse, auf die die Domain, bzw. Subdomain, zeigen soll ein.
6. Klicke auf den Button Record erstellen, um deine Eingaben zu speichern.

> #### Bildliche Abbildung der oben gezeigten Anleitung:
![wavehosting dns a record](../../../static/img/domains/a-record.png)

-----
> *DNS Updates können ein wenig Zeit in Anspruch nehmen. Meist liegt das Problem am Cache oder an deinen eigenen, lokalen Nameservern. Wir empfehlen diese manuell auf die von Cloudflare oder Google umzustellen, um die schnellsten Updates zu erhalten.*
> 
> *[Hier erfährst du, wie du die Cloudflare Nameserver setzt](https://1.1.1.1/dns/)*.
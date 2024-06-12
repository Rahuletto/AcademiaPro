export class Hyperping {
  static async init(params: {
    statuspage: string;
    operational: any;
    incident: any;
    outage: any;
    maintenance: any;
    isNeutral: any;
    dotNeutral: any;
    dotOk: any;
    dotIncident: any;
    dotOutage: any;
    dotMaintenance: any;
    border: string;
    borderColor: any;
    dot: any;
    dotSize: any;
    uptime: any;
  }) {
    try {
      let statuspageUrl = params.statuspage;
      statuspageUrl = statuspageUrl.replace('https://', '');
      statuspageUrl = statuspageUrl.replace('http://', '');
      let response = await fetch(`https://${statuspageUrl}/status.json`, {
        headers: {
          accept: 'application/json, text/plain, */*',
        },
        method: 'GET',
      });
    } catch (error) {}

    let parentElement = document.getElementById('hyperping-badge');
    if (parentElement) {
      let statuspageUrl = params.statuspage;
      statuspageUrl = statuspageUrl.replace('https://', '');
      statuspageUrl = statuspageUrl.replace('http://', '');

      parentElement.setAttribute('href', 'https://' + statuspageUrl);
      parentElement.setAttribute('target', '_blank');
    }
  }
}

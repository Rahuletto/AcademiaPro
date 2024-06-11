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
    let data: any = {
      uptime: '100.000%',
      status: 'up',
    };
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
      data = await response.json();
    } catch (error) {}

    const getDotColor = () => {
      if (params.isNeutral) return params.dotNeutral;
      if (data.indicator === 'up') return params.dotOk;
      if (data.indicator === 'incident') return params.dotIncident;
      if (data.indicator === 'outage') return params.dotOutage;
      if (data.indicator === 'maintenance') return params.dotMaintenance;
    };

    const getParentStyles = () => {
      return `
          text-decoration: underline;
          text-decoration-style: wavy;
          text-decoration-color: ${getDotColor()};
        `;
    };

    let parentElement = document.getElementById('hyperping-badge');
    if (parentElement) {
      parentElement.setAttribute('style', getParentStyles());
      let statuspageUrl = params.statuspage;
      statuspageUrl = statuspageUrl.replace('https://', '');
      statuspageUrl = statuspageUrl.replace('http://', '');

      parentElement.setAttribute('href', 'https://' + statuspageUrl);
      parentElement.setAttribute('target', '_blank');
    }
  }
}

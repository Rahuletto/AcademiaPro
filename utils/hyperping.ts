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

    const getStatus = () => {
      if (data.indicator === 'up') return params.operational;
      if (data.indicator === 'incident') return params.incident;
      if (data.indicator === 'outage') return params.outage;
      if (data.indicator === 'maintenance') return params.maintenance;
    };

    const getDotColor = () => {
      if (params.isNeutral) return params.dotNeutral;
      if (data.indicator === 'up') return params.dotOk;
      if (data.indicator === 'incident') return params.dotIncident;
      if (data.indicator === 'outage') return params.dotOutage;
      if (data.indicator === 'maintenance') return params.dotMaintenance;
    };

    const getBorderRadius = () => {
      if (params.border === 'rounded') return '5px';
      if (params.border === 'round') return '20px';
      return '0';
    };

    const getParentStyles = () => {
      if (params.border === 'none') return '';
      return `
          display: inline-flex;
          border: 1px solid ${params.borderColor};
          border-radius: ${getBorderRadius()};
          padding: 4px;
          padding-left: 8px;
          padding-right: 8px;
        `;
    };

    const badge = `
        <div style="
          display: flex;
          align-items: center;
          gap: 6px;
        ">
          ${
            params.dot
              ? `<div class="status-badge-dot" style="
            background: ${getDotColor()};
            box-shadow: 0px 0px 10px 0px ${getDotColor()};
            height: ${params.dotSize}px;
            width: ${params.dotSize}px;
            border-radius: 100%;
          "></div>`
              : ''
          }
          <div>${getStatus()}</div>
          ${
            params.uptime
              ? `<div style="
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            vertical-align: middle;
            line-height: 16px;
            font-size: 12px;
            font-weight: 400;
            display: inline-block;
            padding: 1px 4px;
            border-radius: 3px;
            border: 1px solid #30363d;
          ">▲ ${data.uptime}</div>`
              : ''
          }
        </div>
      `;

    let parentElement = document.getElementById('hyperping-badge');
    if (parentElement) {
      parentElement.setAttribute('style', getParentStyles());
      let statuspageUrl = params.statuspage;
      statuspageUrl = statuspageUrl.replace('https://', '');
      statuspageUrl = statuspageUrl.replace('http://', '');

      parentElement.setAttribute('href', 'https://' + statuspageUrl);
      parentElement.setAttribute('target', '_blank');
      parentElement.insertAdjacentHTML('beforeend', badge);
    }
  }
}

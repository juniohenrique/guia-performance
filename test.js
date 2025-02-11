import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend } from 'k6/metrics';

export let options = {
  vus: 100,
  duration: '1m',
};

let responseTime = new Trend('response_time');
let cpuUsage = new Trend('cpu_usage');

export default function () {
  let startCPU = __CPU_USAGE__;
  let res = http.get('https://api.mock.com/endpoint');
  let endCPU = __CPU_USAGE__;

  responseTime.add(res.timings.duration);
  cpuUsage.add(endCPU - startCPU);

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time is acceptable': (r) => r.timings.duration < 500,
  });

  sleep(1);
}

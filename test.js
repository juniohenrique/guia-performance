import http from 'k6/http';
import { Rate, Trend, Counter} from 'k6/metrics';

const failureRate = new Rate('api_mock_Failure_Rate');
const latency = new Trend('api_mock_latency');
const requestCount = new Counter('api_mock_request_count');

export const options = {
  thresholds: {
    'api_mock_failure_Rate': ['rate < 0.1'],
    'api_mock_latency': ['p(90) < 1000'],
    'api_mock_request_count': ['count >= 350', 'count <= 400'],
}
}

export default function () {
  const r = http.get('https://api.mock.com/endpoint');
  latency.add(r.timings.duration);
  failureRate.add(r.status !== 200);
  requestCount.add(1);
}

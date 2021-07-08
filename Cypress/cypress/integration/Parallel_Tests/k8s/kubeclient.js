Object.defineProperty(exports, "__esModule", { value: true });
const k8s = require("@kubernetes/client-node");

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

// const k8sAppsV1Api = kc.makeApiClient(k8s.AppsV1Api);

export const listPods = (namespace) => {
  k8sApi.listNamespacedPod(namespace).then((res) => {
    console.log("Pods in Litmus Namespace");
    res.body.items.forEach((item) => {
      console.log(item.metadata.name);
    });
  });
};

listPods("litmus");

// k8sAppsV1Api.listNamespacedDeployment("litmus").then((res) => {
//   console.log("Deployments in Litmus Namespace");
//   res.body.items.forEach((item) => {
//     console.log(item.metadata.name);
//   });
// });

const k8s = require("@kubernetes/client-node");

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

const k8sAppsV1Api = kc.makeApiClient(k8s.AppsV1Api);

module.exports = {
  listPods: async (namespace) => {
    const pods = await k8sApi.listNamespacedPod(namespace);
    return pods.body.items;
  },
  listDeployments: async (namespace) => {
    const deployments = await k8sAppsV1Api.listNamespacedDeployment(namespace);
    return deployments.body.items;
  },
};

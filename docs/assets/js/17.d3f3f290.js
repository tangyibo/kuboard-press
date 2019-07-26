(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{112:function(s,a,e){s.exports=e.p+"assets/img/image-20190715085036593.55559549.png"},113:function(s,a,e){s.exports=e.p+"assets/img/image2019-07-15_09.01.21.0e0d34f2.png"},332:function(s,a,e){s.exports=e.p+"assets/img/image-20190726214032585.f5bc62e4.png"},333:function(s,a,e){s.exports=e.p+"assets/img/image-20190715101542756.5934c00e.png"},334:function(s,a,e){s.exports=e.p+"assets/img/image-20190715193838012.eca23618.png"},356:function(s,a,e){"use strict";e.r(a);var t=e(0),r=Object(t.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"安装-kubernetes-单master节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-kubernetes-单master节点","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装 Kubernetes 单Master节点")]),s._v(" "),t("p",[s._v("对于 Kubernetes 初学者，推荐的在阿里云采购如下配置：")]),s._v(" "),t("ul",[t("li",[s._v("3台 2核4G 的ECS（突发性能实例 t5 ecs.t5-c1m2.large或同等配置，单台约 0.4元/小时，停机时不收费）")]),s._v(" "),t("li",[s._v("Cent OS 7.6")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=obezo3pg",target:"_blank",rel:"noopener noreferrer"}},[s._v("领取阿里云最高2000元红包"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("Kuboard 的 Live Demo 环境使用的是如下拓扑结构，本文档描述了如何在完成该 demo 环境的搭建。")]),s._v(" "),t("p",[s._v("完成安装后，对应的软件版本为：")]),s._v(" "),t("ul",[t("li",[s._v("Kubernetes v1.15.0")]),s._v(" "),t("li",[s._v("Docker 18.09.7")])]),s._v(" "),t("p",[t("img",{attrs:{src:e(332),alt:"image-20190726214032585"}})]),s._v(" "),t("h2",{attrs:{id:"制作标准机镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#制作标准机镜像","aria-hidden":"true"}},[s._v("#")]),s._v(" 制作标准机镜像")]),s._v(" "),t("p",[s._v("通过使用标准机镜像，可以")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("避免重复执行对测试机安装必要软件的过程")])]),s._v(" "),t("li",[t("strong",[s._v("以一种相对标准化的过程管理测试机的维护")])])]),s._v(" "),t("p",[s._v("标准机镜像中预装了如下内容：")]),s._v(" "),t("ul",[t("li",[s._v("docker")]),s._v(" "),t("li",[s._v("nfs-utils")]),s._v(" "),t("li",[s._v("kubernetes images")])]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("ul",[t("li",[s._v("您也可以不制作标准机镜像，而是在三台机器上都执行 "),t("em",[t("strong",[s._v("制作标准机镜像")])]),s._v(" 中的所有操作步骤")])])]),s._v(" "),t("p",[t("strong",[s._v("标准机镜像的制作过程描述如下：")])]),s._v(" "),t("h3",{attrs:{id:"安装docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装docker","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装docker")]),s._v(" "),t("p",[t("strong",[s._v("卸载旧版本")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum remove docker "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\tdocker-client "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\tdocker-client-latest "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\tdocker-common "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\tdocker-latest "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\tdocker-latest-logrotate "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\tdocker-logrotate "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\tdocker-selinux "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\tdocker-engine-selinux "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\tdocker-engine\n")])])]),t("p",[t("strong",[s._v("下载依赖包及安装包")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://download.docker.com/linux/centos/7/x86_64/stable/Packages/containerd.io-1.2.6-3.3.el7.x86_64.rpm\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://download.docker.com/linux/centos/7/x86_64/stable/Packages/docker-ce-cli-18.09.7-3.el7.x86_64.rpm\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://download.docker.com/linux/centos/7/x86_64/stable/Packages/docker-ce-18.09.7-3.el7.x86_64.rpm\n")])])]),t("p",[t("strong",[s._v("安装")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y containerd.io-1.2.6-3.3.el7.x86_64.rpm\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y docker-ce-cli-18.09.7-3.el7.x86_64.rpm\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y docker-ce-18.09.7-3.el7.x86_64.rpm\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" docker\n")])])]),t("p",[t("strong",[s._v("启动 docker 服务")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start docker\n")])])]),t("p",[t("strong",[s._v("检查 docker 版本")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker version\n")])])]),t("blockquote",[t("p",[t("strong",[s._v("参考文档")])]),s._v(" "),t("p",[s._v("https://docs.docker.com/install/linux/docker-ce/centos/")]),s._v(" "),t("p",[s._v("https://docs.docker.com/install/linux/linux-postinstall/")])]),s._v(" "),t("h3",{attrs:{id:"安装-nfs-utils"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-nfs-utils","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装 nfs-utils")]),s._v(" "),t("p",[t("strong",[s._v("执行安装命令")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y nfs-utils\n")])])]),t("p",[s._v("必须先安装 nfs-utils 才能挂载 nfs 网络存储")]),s._v(" "),t("h3",{attrs:{id:"k8s基本配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#k8s基本配置","aria-hidden":"true"}},[s._v("#")]),s._v(" K8S基本配置")]),s._v(" "),t("p",[t("strong",[s._v("配置K8S的yum源")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v("EOF "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/yum.repos.d/kubernetes.repo\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("kubernetes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Kubernetes\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("repo_gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgkey")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg\n       http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg\nEOF\n")])])]),t("p",[t("strong",[s._v("关闭swap/SeLinux")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("swapoff -a\nsetenforce "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])])]),t("p",[t("strong",[s._v("修改 /etc/sysctl.conf")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("vim /etc/sysctl.conf\n")])])]),t("p",[s._v("向其中添加")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("net.ipv4.ip_forward = 1\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\n")])])]),t("p",[s._v("如下图所示")]),s._v(" "),t("p",[t("img",{attrs:{src:e(112),alt:"image-20190715085036593",title:":size=600x445"}})]),s._v(" "),t("p",[t("strong",[s._v("安装kubelet、kubeadm、kubectl")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y kubelet-1.15.0 kubeadm-1.15.0 kubectl-1.15.0\n")])])]),t("p",[t("strong",[s._v("修改docker Cgroup Driver为systemd")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("vim /usr/lib/systemd/system/docker.service\n")])])]),t("p",[s._v("向其中他添加")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("--exec-opt native.cgroupdriver=systemd\n")])])]),t("p",[s._v("如下图所示")]),s._v(" "),t("p",[t("img",{attrs:{src:e(113),alt:"屏幕快照 2019-07-15 09.01.21",title:":size=1000x326"}})]),s._v(" "),t("p",[s._v("重启 docker")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("systemctl daemon-reload\nsystemctl restart docker\n")])])]),t("p",[t("strong",[s._v("启动kubelet")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" kubelet "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" systemctl start kubelet\n")])])]),t("p",[t("strong",[s._v("加载 kubernetes 镜像")])]),s._v(" "),t("p",[s._v("由于k8s服务相关镜像在国外镜像源，国内无法访问")]),s._v(" "),t("p",[s._v("执行以下命令添加docker k8s国内镜像源")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sSL https://get.daocloud.io/daotools/set_mirror.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -s http://f1361db2.m.daocloud.io\n\nsystemctl restart docker\n")])])]),t("p",[t("strong",[s._v("拉取k8s相关镜像")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker pull mirrorgooglecontainers/kube-apiserver:v1.15.0\ndocker pull mirrorgooglecontainers/kube-controller-manager:v1.15.0\ndocker pull mirrorgooglecontainers/kube-scheduler:v1.15.0\ndocker pull mirrorgooglecontainers/kube-proxy:v1.15.0\ndocker pull mirrorgooglecontainers/pause:3.1\ndocker pull mirrorgooglecontainers/etcd:3.3.10\ndocker pull coredns/coredns:1.3.1\n")])])]),t("p",[t("strong",[s._v("更改镜像名为k8s官网镜像")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker tag d235b23c3570 k8s.gcr.io/kube-proxy:v1.15.0\ndocker tag 201c7a840312 k8s.gcr.io/kube-apiserver:v1.15.0\ndocker tag 2d3813851e87 k8s.gcr.io/kube-scheduler:v1.15.0\ndocker tag 8328bb49b652 k8s.gcr.io/kube-controller-manager:v1.15.0\ndocker tag da86e6ba6ca1 k8s.gcr.io/pause:3.1\ndocker tag eb516548c180 k8s.gcr.io/coredns:1.3.1\ndocker tag 2c4adeb21b4f k8s.gcr.io/etcd:3.3.10\n")])])]),t("p",[t("strong",[s._v("制作镜像")])]),s._v(" "),t("p",[s._v("请参考阿里云基于ECS "),t("a",{attrs:{href:"https://help.aliyun.com/document_detail/35109.html?spm=5176.2020520101.0.0.75fc4df5mtdFmV",target:"_blank",rel:"noopener noreferrer"}},[s._v("制作虚拟机镜像"),t("OutboundLink")],1),s._v(" 的文档")]),s._v(" "),t("h2",{attrs:{id:"初始化-master-节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化-master-节点","aria-hidden":"true"}},[s._v("#")]),s._v(" 初始化 master 节点")]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",[s._v("以 root 身份在 demo-master-a-1 机器上执行")])]),s._v(" "),t("p",[t("strong",[s._v("配置 apiserver.demo 的域名")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x.x.x.x  apiserver.demo"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/hosts\n")])])]),t("div",{staticClass:"warning custom-block"},[t("p",[s._v("请替换其中的 x.x.x.x 为您的 demo-master-a-1 的实际 ip 地址")])]),s._v(" "),t("p",[t("strong",[s._v("创建 /root/k8s/kubeadm-config.yaml")])]),s._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kubeadm.k8s.io/v1beta1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ClusterConfiguration\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kubernetesVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1.15.0\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("controlPlaneEndpoint")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"apiserver.demo:6443"')]),s._v("\n\n")])])]),t("p",[t("strong",[s._v("初始化 apiserver")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("kubeadm init --config"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubeadm-config.yaml --upload-certs\n")])])]),t("p",[s._v("执行结果如下图所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:e(333),alt:"image-20190715101542756",title:":size=800x388"}})]),s._v(" "),t("p",[t("strong",[s._v("初始化 root 用户的 kubectl 配置")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /root/.kube/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /root/.kube/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -i /etc/kubernetes/admin.conf /root/.kube/config\n")])])]),t("p",[t("strong",[s._v("安装 calico")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("kubectl apply -f "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nhttps://docs.projectcalico.org/v3.6/getting-started/kubernetes/installation/hosted/kubernetes-datastore/calico-networking/1.7/calico.yaml\n")])])]),t("blockquote",[t("p",[s._v("安装calico， 请参考https://docs.projectcalico.org/v3.6/getting-started/kubernetes/")])]),s._v(" "),t("p",[t("strong",[s._v("等待calico安装就绪：")])]),s._v(" "),t("p",[s._v("执行如下命令，等待 3-10 分钟，直到所有的容器组处于 Running 状态")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("watch")]),s._v(" kubectl get pod -n kube-system\n")])])]),t("p",[t("strong",[s._v("检查 master 初始化结果")])]),s._v(" "),t("p",[s._v("在 master 节点 demo-master-a-1 上执行")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("kubectl get nodes\n")])])]),t("h2",{attrs:{id:"初始化-worker节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化-worker节点","aria-hidden":"true"}},[s._v("#")]),s._v(" 初始化 worker节点")]),s._v(" "),t("h3",{attrs:{id:"获得-join命令参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获得-join命令参数","aria-hidden":"true"}},[s._v("#")]),s._v(" 获得 join命令参数")]),s._v(" "),t("p",[t("strong",[s._v("在 master 节点 demo-master-a-1 节点执行")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("kubeadm token create --print-join-command\n")])])]),t("p",[s._v("可获取kubeadm join 命令及参数，如下所示")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("kubeadm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" apiserver.demo:6443 --token mpfjma.4vjjg8flqihor4vt     --discovery-token-ca-cert-hash sha256:6f7a8e40a810323672de5eee6f4d19aa2dbdb38411845a1bf5dd63485c43d303\n")])])]),t("h3",{attrs:{id:"初始化worker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化worker","aria-hidden":"true"}},[s._v("#")]),s._v(" 初始化worker")]),s._v(" "),t("p",[t("strong",[s._v("针对所有的 worker 节点执行")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x.x.x.x  apiserver.demo"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/hosts\nkubeadm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" apiserver.demo:6443 --token mpfjma.4vjjg8flqihor4vt     --discovery-token-ca-cert-hash sha256:6f7a8e40a810323672de5eee6f4d19aa2dbdb38411845a1bf5dd63485c43d303\n")])])]),t("div",{staticClass:"tip custom-block"},[t("ul",[t("li",[s._v("将 x.x.x.x 替换为 demo-master-a-1 的实际 ip")]),s._v(" "),t("li",[s._v("将 kubeadm join 命令后的参数替换为上一个步骤中实际从 demo-master-a-1 节点获得的参数")])])]),s._v(" "),t("h3",{attrs:{id:"检查初始化结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查初始化结果","aria-hidden":"true"}},[s._v("#")]),s._v(" 检查初始化结果")]),s._v(" "),t("p",[s._v("在 master 节点 demo-master-a-1 上执行")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("kubectl get nodes\n")])])]),t("p",[t("img",{attrs:{src:e(334),alt:"image-20190715193838012"}})]),s._v(" "),t("h2",{attrs:{id:"移除-worker-节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移除-worker-节点","aria-hidden":"true"}},[s._v("#")]),s._v(" 移除 worker 节点")]),s._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",[s._v("正常情况下，您无需移除 worker 节点，如果添加到集群出错，您可以移除 worker 节点，再重新尝试添加")])]),s._v(" "),t("p",[s._v("在准备移除的 worker 节点上执行")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("kubeadm reset\n")])])]),t("p",[s._v("在 master 节点 demo-master-a-1 上执行")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("kubectl delete node demo-worker-x-x\n")])])]),t("div",{staticClass:"tip custom-block"},[t("ul",[t("li",[s._v("将 demo-worker-x-x 替换为要移除的 worker 节点的名字")]),s._v(" "),t("li",[s._v("worker 节点的名字可以通过在节点 demo-master-a-1 上执行 kubectl get nodes 命令获得")])])]),s._v(" "),t("h2",{attrs:{id:"安装-ingress-controller"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-ingress-controller","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装 Ingress Controller")]),s._v(" "),t("blockquote",[t("p",[s._v("Ingress官方文档：https://kubernetes.io/docs/concepts/services-networking/ingress/")]),s._v(" "),t("p",[s._v("Ingress Controllers官网介绍：https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/")]),s._v(" "),t("p",[s._v("本文中使用如下部署方式：https://kubernetes.github.io/ingress-nginx/deploy/baremetal/#using-a-self-provisioned-edge")]),s._v(" "),t("p",[s._v("kubernetes支持多种Ingress Controllers，本文推荐使用 https://github.com/nginxinc/kubernetes-ingress")])]),s._v(" "),t("p",[t("strong",[s._v("在 demo-master-a-1 上执行")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("kubectl apply -f https://raw.githubusercontent.com/eip-work/eip-monitor-repository/master/dashboard/nginx-ingress.yaml\n")])])]),t("p",[t("strong",[s._v("配置域名解析")])]),s._v(" "),t("p",[s._v("将域名 *.demo.yourdomain.com 解析到 demo-worker-a-2 的 IP 地址 z.z.z.z （也可以是 demo-worker-a-1 的地址 y.y.y.y）")]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",[s._v("由于需要申请域名，过程会比较繁琐，有如下两种替代方案：")]),s._v(" "),t("ul",[t("li",[s._v("在您的客户端机器（访问部署在K8S上的 web 应用的浏览器所在的机器）设置 hosts 配置；")]),s._v(" "),t("li",[s._v("暂时放弃域名的配置，临时使用 NodePort 或者 "),t("code",[s._v("kubectl port-forward")]),s._v(" 的方式访问部署在 K8S 上的 web 应用")])])]),s._v(" "),t("p",[t("strong",[s._v("验证配置")])]),s._v(" "),t("p",[s._v("在浏览器访问 a.demo.yourdomain.com，将得到 404 NotFound 错误页面")]),s._v(" "),t("h2",{attrs:{id:"下一步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下一步","aria-hidden":"true"}},[s._v("#")]),s._v(" 下一步")]),s._v(" "),t("p",[s._v("🎉 🎉")]),s._v(" "),t("p",[s._v("您已经完成了 Kubernetes 集群的安装，下一步请：")]),s._v(" "),t("p",[t("a",{attrs:{href:"/install/install-kubectl"}},[s._v("从客户端电脑远程管理 Kubernetes")]),s._v(" "),t("a",{attrs:{href:"/install/install-dashboard"}},[s._v("安装 Kuboard")])])])},[],!1,null,null,null);a.default=r.exports}}]);
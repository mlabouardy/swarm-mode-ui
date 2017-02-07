import os
import requests

class Docker:

    WORKER = 'worker'
    MANAGER = 'manager'

    def __init__(self):
        self.URL = 'http://' + os.environ['SWARM_API']

    def getServices(self):
        r = requests.get(self.URL + '/services')
        return r.json();

    def getTasks(self):
        r = requests.get(self.URL + '/tasks')
        return r.json();

    def getNodeName(self, name):
        r = requests.get(self.URL + '/nodes/' + name)
        return r.json();

    def getManagers(self):
        r = requests.get(self.URL + '/nodes')
        data = []
        for node in r.json():
            if node['Spec']['Role'] == self.MANAGER:
                data.append(node)
        return data

    def getWorkers(self):
        r = requests.get(self.URL + '/nodes')
        data = []
        for node in r.json():
            if node['Spec']['Role'] == self.WORKER:
                data.append(node)
        return data

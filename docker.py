import os
import requests

class Docker:
    def __init__(self):
        self.URL = 'http://' + os.environ['SWARM_API']

    def getNodes(self):
        r = requests.get(self.URL + '/nodes')
        print(r.status_code)
        return r.json()

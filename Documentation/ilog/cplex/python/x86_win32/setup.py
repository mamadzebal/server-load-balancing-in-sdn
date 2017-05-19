#!/usr/bin/env python

# --------------------------------------------------------------------------
# File: setup.py
# ---------------------------------------------------------------------------
# Licensed Materials - Property of IBM
# 5725-A06 5725-A29 5724-Y48 5724-Y49 5724-Y54 5724-Y55 5655-Y21
# Copyright IBM Corporation 2008, 2013. All Rights Reserved.
#
# US Government Users Restricted Rights - Use, duplication or
# disclosure restricted by GSA ADP Schedule Contract with
# IBM Corp.
# ------------------------------------------------------------------------

"""
setup.py file for the CPLEX Python API 
"""

from distutils.core import setup, Extension
from sys import version_info

error_string = "CPLEX 12.6.0.0 is not compatible with this version of Python."

if   version_info < (2, 6, 0):
    raise Exception(error_string)
elif version_info < (2, 7, 0):
    data = ['py26_cplex1260.pyd', 'cplex1260.dll']
elif version_info < (2, 8, 0):
    data = ['py27_cplex1260.pyd', 'cplex1260.dll']
else:
    raise Exception(error_string)
    
setup(name = 'cplex',
      version = '12.6.0.0',
      author = "IBM",
      description = """A Python interface to the CPLEX Callable Library.""",
      packages = ['cplex',
                  'cplex._internal',
                  'cplex.exceptions'],
      package_dir = {'cplex': 'cplex',
                     'cplex._internal': 'cplex/_internal',
                     'cplex.exceptions': 'cplex/exceptions'},
      package_data = {'cplex._internal': data},
      url = 'http://www-01.ibm.com/software/websphere/products/optimization/',
      )

    

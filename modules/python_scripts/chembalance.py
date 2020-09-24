import sys
from chempy import balance_stoichiometry
from pprint import pprint
reac, prod = balance_stoichiometry({'C7H5(NO2)3', 'NH4NO3'}, {'CO', 'H2O', 'N2'})
pprint(reac.OrderedDict)
pprint(prod.OrderedDict)


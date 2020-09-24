import sys
from chempy import balance_stoichiometry
reac, prod = balance_stoichiometry({'ICl', 'H2O'}, {'Cl', 'IO3', 'I2', 'H'})
print(reac)
print(prod)


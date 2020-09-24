from chempy import Equilibrium
from sympy import symbols
K1, K2, Kw = symbols('K1 K2 Kw')
e1 = Equilibrium({'Ba': 1, 'H2SO4': 1}, {'BaSO4': 1, 'H2': 1}, K1)
coeff = Equilibrium.eliminate([e1], 'e-')
print(coeff)

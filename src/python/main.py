# the following is samplecode taken from pyodide docs:

# import libraries..
import matplotlib
import numpy as np
matplotlib.use("module://matplotlib.backends.html5_canvas_backend")
import matplotlib.cm as cm
from matplotlib import pyplot as plt
# make data using numpy:
delta = 0.25
x = y = np.arange(-3.0, 3.0, delta)
X, Y = np.meshgrid(x, y)
Z1 = np.exp(-(X**2) - Y**2)
Z2 = np.exp(-((X - 1) ** 2) - (Y - 1) ** 2)
Z = (Z1 - Z2) * 2
# plot:
plt.figure()
plt.imshow(
Z,
interpolation="bilinear",
cmap=cm.RdYlGn,
origin="lower",
extent=[-3, 3, -3, 3],
vmax=abs(Z).max(),
vmin=-abs(Z).max(),
)
plt.show()
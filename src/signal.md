---
id: signal
title: Signal
author: Ludwig Chieng
layout: default
tags: test math
searchable: false
---

# Signal : Tests Katex

La courbe prend la forme d'une « cloche » à intervalle régulier. Son « épaisseur » semble diminuer au fur et à mesure que $K$ grandit. Pour $K$ impair, la cloche est alternativement orientée vers le haut ou vers le bas.

On pourrait tenter de le démontrer en montrant que:

$$
\lim_{K\to\infty} \left( \int_{0}^{T_0}{\cos^K (2 \pi f_0 t) dt} \right)^2 = 0
$$

Les coefficients de Fourier sont :

$$
\begin{cases}
a_0 = 4s\tau + 4 \left(\frac{1}{2} - \tau \right) + \frac{4}{2\pi} \sin(2\pi \tau)
\\
a_1 = \frac{2}{\pi} sin(2\pi \tau)(s-1) + 1-2\tau - \frac{1}{2\pi} sin(4\pi \tau)
\\
a_k = \frac{-2}{\pi} sin(2\pi k \tau)(s-1) \frac{1}{k(k+1)(k-1)} + \frac{2}{\pi} \frac{sin(2\pi \tau) \, cos(2\pi k \tau)}{(k+1)(k-1)} \quad , \forall k \in \mathbb{N}^* \backslash \{1\}
\end{cases}
$$
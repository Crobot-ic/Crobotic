## Les Principales Lois Électriques

## Résistances Équivalentes
1. **En Série** :  
   $$
   R_{\text{eq}} = R_1 + R_2 + \dots
   $$
2. **En Parallèle** :  
   $$
   \frac{1}{R_{\text{eq}}} = \frac{1}{R_1} + \frac{1}{R_2} + \dots
   $$

### 1. Loi des Nœuds (Kirchhoff)
- **Principe** : La somme des courants entrant dans un nœud est égale à la somme des courants en sortant.
- **Formule** :  
  $$
  \sum I_{\text{entrant}} = \sum I_{\text{sortant}}
  $$
- **Application** : Permet d’analyser les circuits complexes pour déterminer les intensités dans chaque branche.

**Exemple :**  
Dans un nœud où \(I_1\) et \(I_2\) entrent, et \(I_3\) sort :  
$$
I_1 + I_2 = I_3
$$

### 2. Loi des Mailles (Kirchhoff)
- **Principe** : La somme des tensions dans une boucle fermée est nulle.
- **Formule** :  
  $$
  \sum U = 0
  $$
- **Application** : Utilisée pour trouver les tensions inconnues dans un circuit.

**Exemple :**  
Dans une boucle fermée avec une source de tension \(U_1\) et deux résistances (\(R_1\) et \(R_2\)) :  
$$
U_1 - (R_1 \cdot I) - (R_2 \cdot I) = 0
$$  
Reformulé :  
$$
U_1 = I \cdot (R_1 + R_2)
$$

### 3. Pont Diviseur de Tension
- **Principe** : Une tension totale appliquée à plusieurs résistances en série est répartie proportionnellement à leurs valeurs.
- **Formule** :  
  $$
  U_i = U \cdot \frac{R_i}{R_{\text{total}}}
  $$
    - \(U_i\) : Tension aux bornes de la résistance \(R_i\).
    - \(U\) : Tension totale appliquée.
    - \(R_{\text{total}}\) : Somme des résistances (\(R_1 + R_2 + \dots\)).

**Exemple :**  
Deux résistances \(R_1 = 2 \, \Omega\) et \(R_2 = 4 \, \Omega\) en série sous \(U = 12 \, V\) :  
$$
U_1 = 12 \cdot \frac{2}{6} = 4 \, V, \quad U_2 = 12 \cdot \frac{4}{6} = 8 \, V
$$

### 4. Pont Diviseur de Courant
- **Principe** : Un courant total se divise entre plusieurs branches en parallèle, proportionnellement à l’inverse des résistances.
- **Formule** :  
  $$
  I_i = I \cdot \frac{R_{\text{total}}}{R_i}
  $$
    - \(I_i\) : Courant traversant la résistance \(R_i\).
    - \(R_{\text{total}}\) : Résistance équivalente des branches en parallèle.

**Exemple :**  
Deux résistances \(R_1 = 3 \, \Omega\) et \(R_2 = 6 \, \Omega\) en parallèle sous \(I = 6 \, A\) :  
$$
R_{\text{total}} = \frac{1}{\frac{1}{3} + \frac{1}{6}} = 2 \, \Omega
$$  
$$
I_1 = 6 \cdot \frac{2}{3} = 4 \, A, \quad I_2 = 6 \cdot \frac{2}{6} = 2 \, A
$$

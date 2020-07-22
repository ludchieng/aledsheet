---
id: linux-debian-bases
title: Bases de Linux Debian
author: Ludwig Chieng
layout: default
tags: dev developpement web linux unix debian ubuntu mint
licence: CC-BY-SA Ludwig Chieng
---

# Bases de Linux (Debian)

Linux peut être installé sur un ordinateur en substitution de Windows ou de Mac OS. Mais souvent, certains l'utilisent dans un cas de figure assez particulier :
* **en dual-boot**. Cela signifie que l'ordinateur « possède » deux OS (systèmes d'exploitation). Au démarrage, on choisit de démarrer soit sous Linux, soit sous Windows. Mais pas les deux en même temps.
* **dans une machine virtuelle**. Dans ce cas, il y a un OS, appelé « hôte », sur lequel on a lancé un programme qui fait tourner un OS « invité ». On peut avoir par exemple Windows 10 en OS hôte qui fait tourner Linux en OS invité par le biais du logiciel *Oracle VM VirtualBox*.

La VM (machine virtuelle) permet de « faire tourner » un OS dans un autre OS, en même temps. On peut par exemple, coder sous Linux et faire du graphisme sur Photoshop sous Windows. Plutôt pratique, car la suite Adobe n'est pas compatible avec Linux. Il existe néanmoins des alternatives à ces logiciels sous Linux. Le problème majeur c'est les performances de l'ordinateur, forcément, puisqu'il y a deux OS qui fonctionnent parallèlement. On est vite limité en RAM (un OS invité type Ubuntu en requiert minimum 2500MB). De plus, il y a une latence entre un clic de souris ou une frappe de clavier et sa « transmission » vers l'hôte invité ; ce qui peut être gênant.

Le dual-boot évite tous ces incovénients mais ne permet pas de switcher rapidement entre les deux OS. Il est parfois délicat à mettre en place sur certains PC.


## Checklist VM

Pour installer Linux sur *Oracle VM VirtualBox*. Il faut télécharger :
* l'installeur logiciel d'**Oracle VM VirtualBox** pour l'OS qui va bien.  \
https://download.virtualbox.org/virtualbox/
* l'image disque d'une **distribution Linux** : [Debian](https://www.debian.org/) (la classique), [Ubuntu](https://ubuntu.com/) (la famous), [Mint](https://linuxmint.com/) (ma préférée), etc.
* les fichiers **VBox Guest Additions** qui correspondent à la version d'*Oracle VM VirtualBox*. C'est facultatif mais c'est plus confortable, pour régler la taille de l'écran, etc. \
https://download.virtualbox.org/virtualbox/

Ensuite, il faut créer une **nouvelle** VM :
* de type Linux,
* avec 3000MB de RAM (voire plus mais ne pas dépasser la moitié de la RAM totale du PC),
* en créant un disque dur virtuel type VDI, dynamiquement alloué d'au moins 15GB.

Une nouvelle VM vient d'apparaître dans la barre latérale gauche. Il faut en modifier les **paramètres** (clic droit). Aller dans *Stockage* et ajouter l'image disque Linux dans le lecteur de disque virtuel de la VM.

En **démarrant** la VM, l'image disque Linux sera lu, et l'**installation** de Linux pourra s'effectuer.

Après cela, il sera possible et recommandé d'installer les **guest additions**.  \
https://www.linuxbabe.com/linux-mint/install-virtualbox-guest-additions-in-linux-mint/


## Répertoires et fichiers

On précise que « répertoire » et « dossier » sont la même chose.  \
Équivalences en anglais : **répertoire** (*directory*), **fichier** (*file*).

A la différence de Windows, il n'y a pas de `C:\`. On a ce qu'on appelle la racine (*root*), symbolisée par `/`. (à ne pas confondre avec `/root` qui est autre chose)

Le chemin d'accès (*path*) d'un fichier `liste_course.txt` situé dans le **répertoire racine** (*root directory*) est `/liste_course.txt`.

D'ailleurs, sous Linux on utilise pas vraiment les extensions de fichiers `.txt`. C'est une question de préférence, mais pour les fichiers texte, en général, on ne met pas d'extension.

Si on possède un fichier `facture_01` dans un répertoire `achats` situé à la racine, alors le chemin de ce fichier est `/achats/facture_01`.


### Quelques repères

Ces répertoires sont spécifiques à Debian, Ubuntu ou Mint. Sur d'autres distributions Linux cela peut être différent.

* `/bin` les **fichiers exécutable vitaux** de Linux, des fichiers binaires (*binary*) illisibles pour nous, pauvres humain·e·s. (on y touche pas)
* `/boot` le **noyau Linux** (*kernel*) pour le démarrage de l'ordinateur, image de disque RAM initial, boot loader GRUB. (on y touche pas non plus)
* `/etc` les fichiers de **configuration**. Si vous installez un serveur web, c'est sûrement ici que vous trouverez les fichiers pour le configurer.
* `/home` le répertoire personnel des utilisateurs (ex. : `/home/rasputin`). C'est là qu'on range les documents privés type musiques, photos, etc...
* `/lib` des fichiers qui sont utilisés par `/bin`. Ce sont en fait des bibliothèques de fonctions (*libraries*) qui sont utilisés par les différents programmes de l'ordinateur.
* `/media` là où se « monte » (*mount*) les CD, clés USB ou autres périphériques en tout genre.
* `/root` le répertoire personnel de l'utilisateur nommé « root ». A ne pas confondre avec la racine (*root*) `/`. Ce répertoire personnel n'est pas dans `/home` pour des raisons de sécurité.
* `/usr` les programmes des utilisateurs. C'est ici que se trouve *Firefox*, etc.


## Commandes de bases

Ici, on parlera des commandes pour Debian, Ubuntu ou Mint. Sur d'autres distributions Linux les commandes peuvent être différentes.

Les commandes servent par exemple à :
* explorer la **liste des fichiers** de l'ordinateur
* créer, couper, copier, coller ou supprimer des **fichiers** ou des **répertoires**
* démarrer, stopper ou redémarrer des **services** (ex. : un serveur web)
* éditer des **fichiers textes** (ex. : pour changer la configuration d'un service)
* **télécharger** des fichiers (ex. : via HTTP, FTP, IMAP...)
* **installer** un logiciel
* ajouter un **utilisateur**
* retirer les **droits d'accès** à un répertoire à un utilisateur
* ...

On peut faire certaines de ces choses sans taper une seule commande (ex. : déplacer un répertoire avec un bon `Ctrl+X`, `Ctrl+V`). Alors, à quoi bon ? En fait, les commandes ont un intérêt pratique, surtout quand il s'agit de gérer un ordinateur **à distance** ou d'**automatiser des tâches** (genre une liste de commandes les unes à la suite des autres). Et puis, certaines actions ne peuvent se faire **que par des commandes**.

### Le terminal

Elles s'exécutent dans le **terminal** ou **interpréteur de commandes** parfois appelé **Shell Unix** ou encore **bash**.

Si vous ouvrez le terminal, vous verrez marqué quelque chose comme :

``` shell
rasputin@wololo:~$ █
```

Quand on exécute une commande, on le fait en tant qu'**utlisateur** sur une **machine** donnée. Dans l'exemple du dessus, c'est l'utilisateur `rasputin` sur la machine `wololo`. Il est possible de lancer une commande en tant qu'un autre utilisateur, voire même d'exécuter une commande sur une machine **à distance** ! Eh oui, pour administrer un serveur web c'est plus pratique de le faire à distance. Ça veut dire que depuis le terminal d'un ordinateur `A`, vous exécutez des commandes sur un ordinateur `B`.

Autres exemples qu'on rencontre assez souvent pour des machines distantes :

``` shell
rasputin@192.168.1.34:~$ █
rasputin@dayum.com:~$ █
```

### On tape quoi dukou ?

``` shell
# Pas besoin de marquer le '$' dans le terminal
$ echo aleeeed
```

Cette commande écrit `aleeeed` sur la ligne du dessous, dans le terminal. Bon ça sert pas à grand chose mais, si c'était pas le cas, maintenant vous savez le faire 😊.

`echo` est le nom de la commande et `aleeeed` est un **argument** que l'on « transmet » à la commande.

``` shell
# Créer un répertoire : "mkdir" → "make directory"
$ mkdir nudes
# Le nouveau répertoire se situe dans le répertoire personnel de l'utilisateur.
```

Là c'est tout pareil, `mkdir` est le nom de la commande et `nudes` est un argument.

En fait, l'argument c'est un élément qu'on donne à la commande pour qu'elle réalise sa fonction. `mkdir` ne sait pas quel nom donner au nouveau répertoire tant qu'on ne lui a pas transmis. De même `echo` ne sais pas quoi écrire dans le terminal tant qu'on ne lui a pas donner le ou les mots à écrire.

``` shell
# Supprimer un répertoire : "rmdir" → "remove directory"
$ rmdir nudes
```

**Astuce** \
Appuyer sur `↑` permet d'accéder à la commande précédente. Il est possible d'avoir l'historique des dernières commandes avec `history`.

**Astuce le retour** \
Pour aller plus vite, on peut taper seulement `rmdir n` et appuyer sur la touche `TAB`. Normalement, le nom du répertoire apparaît tout en entier d'un coup ! C'est ce qu'on appelle l'**autocomplétion**. Cela fonctionne pour toutes les commandes qui demandent des noms de répertoires comme `cd` par exemple. Si ça ne marche pas c'est probablement :
* qu'il y a un autre répertoire qui commence par « n ». Il faut taper `rmdir nu` puis `TAB`,
* qu'on n'est pas dans le bon répertoire (commande `ls` pour avoir la liste des fichiers et répertoires et `cd` pour se déplacer),
* que la commande n'est pas la bonne.

**Astuce 3 : Tokyo Drift** \
Si une commande met trop de temps à s'exécuter, pour interrompre le programme il suffit de faire `Ctrl+C`.

### Gestion des fichiers et répertoires

``` shell
# Créer moult répertoires
$ mkdir rock rap classique electro

# Créer moult répertoires avec des espaces dans les noms
$ mkdir "progressive melodic death metal" "nu garage persian trap"
```

``` shell
# Se déplacer dans le répertoire "local" contenu dans "usr"
$ cd /usr/local
```

On remarque alors que l'invite de commande a changé :

``` shell
# Avant
rasputin@wololo:~$ █
# Après
rasputin@wololo:/usr/local$ █
```

Pour s'exécuter, certaines commandes prennent en compte « l'endroit où on est placé ». Quand on crée un répertoire avec `mkdir`, le répertoire se crée à « l'endroit où on est placé ». Cet endroit est indiqué après `:`, c'est-à-dire `/usr/local`.

Par convention, `~` est le répertoire personnel de l'utilisateur. Quand on démarre le terminal juste après avoir allumé l'ordinateur, par défaut on se situe ici.

``` shell
# Se déplacer dans le répertoire personnel de l'utilisateur "rasputin" 
$ cd /home/rasputin

# Aller dans mon répertoire, en tant qu'utilisateur "rasputin"
$ cd /home/rasputin

# Aller dans mon répertoire, en tant qu'utilisateur "rasputin" (méthode 2)
$ cd ~

# Aller dans mon répertoire, en tant qu'utilisateur "rasputin" (méthode 3)
$ cd

# Aller à la racine
$ cd /
```

``` shell
# Aller dans mon répertoire puis aller dans "Public"
$ cd
$ cd Public # Rappel : on peut juste taper "cd Pu" puis appuyer sur "TAB"

# Se déplacer dans le répertoire dans lequel on est déjà
# (ne sert littéralement à rien)
$ cd .
# Aller dans le répertoire parent
$ cd ..
# Aller dans le répertoire grand-parent
$ cd ../..

# Aller dans le répertoire "Public" depuis "~" (écritures équivalentes)
$ cd Public/
$ cd ./Public
$ cd ./Public/
$ cd ~/Public
```

``` shell
# Aller dans "~/Public" puis aller dans "~/Documents"
$ cd ~/Public
$ cd ../Documents

```

``` shell
# Supprimer un répertoire et tout son contenu comme un·e sagouin·e
$ rmdir -rf nudes
```

Eh voilà, On va parler des options ! `-r` et `-f` sont des options. Elles permettent de 
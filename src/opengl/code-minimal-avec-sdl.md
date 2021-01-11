---
id: code-minimal-avec-sdl
title: Bases d'OpenGL
author: Ludwig Chieng
layout: default
tags: dev developpement logiciel c cpp c++ opengl open gl sdl
licence: CC-BY-SA Ludwig Chieng
---

# Code minimal avec SDL

## Installation des libs sur Debian

``` shell
$ sudo apt install libsdl1.2-dev libsdl-image1.2-dev
```

``` shell
$ sudo apt install libsdl2-dev libsdl2-image-dev libsdl2-ttf-dev
```


## Documentations
* **SDL 1.2.15**. https://www.libsdl.org/release/SDL-1.2.15/docs/html/
* **SDL 2**. https://wiki.libsdl.org/CategoryAPI
* **OpenGL**. https://www.khronos.org/registry/OpenGL-Refpages/gl2.1/ 
    https://docs.microsoft.com/fr-fr/windows/win32/opengl/opengl-reference 


## Code minimal

``` cpp
#include <SDL/SDL.h>
#include <GL/gl.h>
#include <GL/glu.h>
#include <stdlib.h>
#include <stdio.h>

static const unsigned int WINDOW_WIDTH = 800;
static const unsigned int WINDOW_HEIGHT = 600;
static const unsigned int BIT_PER_PIXEL = 32;
static const Uint32 FRAMERATE_MILLISECONDS = 1000 / 60; // durée entre le rendu de deux images

int main(int argc, char** argv) {
  if(-1 == SDL_Init(SDL_INIT_VIDEO)) {
    fprintf(stderr, "Impossible d'initialiser la SDL. Fin du programme.\n");
    return EXIT_FAILURE;
  }

  SDL_Surface* surface;
  surface = SDL_SetVideoMode(WINDOW_WIDTH, WINDOW_HEIGHT, BIT_PER_PIXEL, SDL_OPENGL | SDL_GL_DOUBLEBUFFER);
  if (NULL == surface) {
    fprintf(stderr, "Impossible d'ouvrir la fenêtre. Fin du programme.\n");
    return EXIT_FAILURE;
  }

  int loop = 1;
  while (loop) {
    Uint32 startTime = SDL_GetTicks();

    /* Placer ici le code de dessin */
    
    // Echange du front et du back buffer : mise a jour de la fenetre
    SDL_GL_SwapBuffers();
    
    SDL_Event e;
    while (SDL_PollEvent(&e)) {
      if(e.type == SDL_QUIT) {
        loop = 0;
        break;
      }
      switch (e.type) {
        case SDL_MOUSEBUTTONUP:
        printf("clic en (%d, %d)\n", e.button.x, e.button.y);
        break;

        case SDL_KEYDOWN:
        printf("touche pressee (code = %d)\n", e.key.keysym.sym);
        break;
      }
    }

    Uint32 elapsedTime = SDL_GetTicks() - startTime;
    // Pour le respect du framerate
    if(elapsedTime < FRAMERATE_MILLISECONDS) {
      SDL_Delay(FRAMERATE_MILLISECONDS - elapsedTime);
    }
  }
  SDL_Quit();
  return EXIT_SUCCESS;
}
```
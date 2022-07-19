- client/

provides the frontend interface and public entrypoint to Realm.

  - project setup
  $ npm install

  - compiles and hot-reloads for development
  $ npm run serve

  - compiles and minifies for production
  $ npm run build

terminology
  - realms:
    - Gaia:  land, sea and structures, default Realm entrypoint
    - Minos: the interior plane of above-world structures
  - services:
    - Atlas: oversees realm generation
    - Prometheus: creates avatars
      - data/Avatar               /---> stores the positions of local and remote
      - data/AvatarController  --/      avatars, determines which bounds to
                                        generate.
      - render/AvatarRender    -------> renders the local avatar, listens to
                                        keyboard input events, etc.
  - Nyx: framework for Phaser
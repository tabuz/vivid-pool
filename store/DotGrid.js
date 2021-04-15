const page_name__config = {
  index: {
    x: 0,
    y: -300,
    z: 0,
    rotx: 0.0,
    roty: 0.0,
    rotz: 0.0,
    color: '#ffffff',
    texture: 'static/sqTest2.png',
  },
  mission: {
    x: -400,
    y: -250,
    rotx: 0.0,
    roty: 0.0,
    rotz: 0.0,
    color: '#ffffff',
    texture: 'static/sqTest2.png',
  },
  about: {
    x: 0,
    y: 400,
    z: -1000,
    rotx: -3.14,
    roty: -1.57,
    rotz: 0.0,
    color: '#ffffff',
    texture: 'static/sqTest2.png',
  },
  'guide-category-article': {
    x: 2000,
    y: -500,
    z: -1500,
    rotx: -0.5,
    roty: -3.14,
    rotz: 0,
    color: '#ffffff',
    texture: 'static/sqTest2.png',
  },
  guide: {
    x: 0,
    y: 0,
    z: 0,
    rotx: -3.14,
    roty: 0.0,
    rotz: 0.0,
    color: '#ffffff',
    texture: 'static/sqTest2.png',
  },
  null: {
    x: -600,
    y: -700,
    z: 400,
    rotx: 0.0,
    roty: 0.0,
    rotz: 0.0,
    color: '#ffffff',
    texture: 'static/sqTest2.png',
  },
  contact: {
    x: -400,
    y: -600,
    z: 300,
    rotx: 0.0,
    roty: 0.0,
    rotz: -0.75,
    color: '#ffffff',
    texture: 'static/sqTest2.png',
  },
}
export const state = () => ({
  x: 85,
  y: -345,
  z: 0,
  rotx: 0.0,
  roty: 0.0,
  rotz: 0.0,
  color: '#ffffff',
  texture: 'static/sqTest2.png',
})

export const mutations = {
  set_config(state, page_name) {
    const { x, y, z, rotx, roty, rotz, color, texture } = page_name__config[
      page_name
    ]
    state.x = x
    state.y = y
    state.z = z
    state.rotx = rotx
    state.roty = roty
    state.rotz = rotz
    state.color = color
    state.texture = texture
  },
}

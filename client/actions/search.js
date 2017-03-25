


export const searchTalent = (user) => {
  console.log("you clicked", user.talent)
  return {
    type: "USER_SEARCHED",
    data: user,
  }
}
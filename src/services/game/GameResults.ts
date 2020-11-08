export const getGamePercentage = (
  finalScore: number,
) => ((finalScore * 100) / process.env.VUE_APP_GAME_STEPS);

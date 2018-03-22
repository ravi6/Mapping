function slippy
  Tile.lat=15;
  Tile.lon=25;
  Tile.zoom=10;
  Tile = getxy(Tile)
  Tile = getll(Tile)
end

% -----------------------------
% Slippy Tile functions
% -----------------------------

function [Tile] = getxy(Tile)
% -----------------------------
  rho = pi/180; %  degrees to radians
  lon_rad = Tile.lon * rho;
  lat_rad = Tile.lat * rho;

  n = 2 ^ Tile.zoom;
  Tile.x = n * ((Tile.lon + 180) / 360);
  Tile.y = n * (1 - (log(tan(lat_rad) + sec(lat_rad)) / pi)) / 2;
  Tile.x = floor(Tile.x);
  Tile.y = floor(Tile.y);
end


function [Tile] = getll(Tile)
% -----------------------------
  n=2^Tile.zoom ;
  Tile.lon = Tile.x / n * 360.0 - 180.0;
  lat_rad = atan(sinh(pi * (1 - 2 * Tile.y / n)));
  Tile.lat = lat_rad * 180.0 / pi;
end

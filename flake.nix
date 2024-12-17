{
  description = "Andrea Ciceri's Curriculum Vitae";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
  };

  outputs = inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [ "x86_64-linux" ];
      perSystem = { pkgs, config, lib, ... }: {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
	    texlive.combined.scheme-full
	  ];
        };
	packages = {
	  cv = pkgs.runCommandNoCC "cv.pdf" {} ''
	    cp -r ${./src}/* . 
            ${lib.getExe' pkgs.texlive.combined.scheme-full "xelatex"} cv.tex
	    mkdir $out
            cp cv.pdf $out
	  '';
	  default = config.packages.cv;
	};
      };
    };
}

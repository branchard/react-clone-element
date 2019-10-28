const path = require("path")

module.exports = {
    // Change le point d'entrée en index.tsx
    entry: "./src/index.tsx",
    // Active le sourcemap pour le debugging
    devtool: "source-map",
    resolve: {
        // Ajoute '.ts' et'.tsx' aux extensions traitées
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index.js"
    },
    module: {
        rules: [
            // Tous les fichiers en `.ts` ou `.tsx` seront traités en utilisant `awesome-typescript-loader`
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            }
        ]
    },
    devServer: {
        host: '0.0.0.0'
    }
}
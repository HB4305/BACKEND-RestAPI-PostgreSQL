export default function (schema) {
    return function (req, res, next) {
        try {
            schema.parse(req.body);
        } catch (err) {
            return res.status(400).json({
                "error": {
                    "message": "Validation failed",
                    "details": [
                        "description must be at least 50 characters",
                        "chef_id does not exist in database",
                        "original_price must be greater than or equal to current_price"
                    ]
                }
            })
        }
        next();
    }
}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>{{ $order->reference() }}</title>
</head>
<body style="font-family: Arial, sans-serif; color: #2f1a09; line-height: 1.6;">
    <h1 style="margin-bottom: 8px;">New order request received</h1>
    <p style="margin-top: 0;">Reference: <strong>{{ $order->reference() }}</strong></p>

    <table cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 720px;">
        <tbody>
            <tr>
                <td style="border: 1px solid #dec8ac; width: 220px;"><strong>Name</strong></td>
                <td style="border: 1px solid #dec8ac;">{{ $order->name }}</td>
            </tr>
            <tr>
                <td style="border: 1px solid #dec8ac;"><strong>Phone</strong></td>
                <td style="border: 1px solid #dec8ac;">{{ $order->phone }}</td>
            </tr>
            <tr>
                <td style="border: 1px solid #dec8ac;"><strong>Email</strong></td>
                <td style="border: 1px solid #dec8ac;">{{ $order->email ?? 'Not provided' }}</td>
            </tr>
            <tr>
                <td style="border: 1px solid #dec8ac;"><strong>Preferred contact</strong></td>
                <td style="border: 1px solid #dec8ac;">{{ $order->preferredContactMethodLabel() }}</td>
            </tr>
            <tr>
                <td style="border: 1px solid #dec8ac;"><strong>Product</strong></td>
                <td style="border: 1px solid #dec8ac;">{{ $order->productLabel() }}</td>
            </tr>
            <tr>
                <td style="border: 1px solid #dec8ac;"><strong>Quantity</strong></td>
                <td style="border: 1px solid #dec8ac;">{{ $order->quantity }}</td>
            </tr>
            <tr>
                <td style="border: 1px solid #dec8ac;"><strong>Fulfillment</strong></td>
                <td style="border: 1px solid #dec8ac;">{{ $order->fulfillmentTypeLabel() }}</td>
            </tr>
            <tr>
                <td style="border: 1px solid #dec8ac;"><strong>Address / landmark</strong></td>
                <td style="border: 1px solid #dec8ac;">{{ $order->address ?? 'Not provided' }}</td>
            </tr>
            <tr>
                <td style="border: 1px solid #dec8ac;"><strong>Preferred date</strong></td>
                <td style="border: 1px solid #dec8ac;">{{ $order->preferred_date?->format('Y-m-d') ?? 'Flexible' }}</td>
            </tr>
            <tr>
                <td style="border: 1px solid #dec8ac;"><strong>Preferred time</strong></td>
                <td style="border: 1px solid #dec8ac;">{{ $order->preferred_time ?? 'Flexible' }}</td>
            </tr>
            <tr>
                <td style="border: 1px solid #dec8ac;"><strong>Notes</strong></td>
                <td style="border: 1px solid #dec8ac;">{{ $order->notes ?? 'No extra notes' }}</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
